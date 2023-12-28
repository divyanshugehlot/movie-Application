import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../component/Header';
import MovieCard from '../component/MovieCard';
import axios from 'axios';

const MovieList = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [visibleDataCount, setVisibleDataCount] = useState(5); // Initial visible items
  const itemsPerPage = 5; // Number of items to load per "Load More" click

  const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

  const getData = async () => {
    try {
      const res = await axios.get(url, {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWEzMjI1ODA1ZDhmZTExNzNiZjBhNjY3OTVkOTRlNSIsInN1YiI6IjY1OGQwYTYyOGVkMDNmNWUzYzkzY2JlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SIaiWNDJ5nhvWTGVuk8ubQxgZfQJ8F_xPAS2TCTKeOI',
        },
      });

      if (res.data) {
        setData(res.data.results);
        setFilteredData(res.data.results.slice(0, visibleDataCount)); // Set filtered data initially with a subset
        setLoading(false);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (text) => {
    const searchText = text.toLowerCase();
    const filteredItems = data.filter((item) => (item.title || '').toLowerCase().includes(searchText));
    setFilteredData(filteredItems);
    setSearch(text);
  };

  const handleLoadMore = () => {
    const newVisibleDataCount = visibleDataCount + itemsPerPage;
    setFilteredData(data.slice(0, newVisibleDataCount));
    setVisibleDataCount(newVisibleDataCount);
  };

  return (
    <>
      <Header isSearch={true} search={handleSearch} />
      <View style={{ height: '83%' }}>
        <ScrollView>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            filteredData.map((prod) => (
              <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }} key={prod.id}>
                <MovieCard id={prod.id} title={prod.title} overview={prod.overview} releaseDate={prod.release_date} data={prod} />
              </View>
            ))
          )}
          <TouchableOpacity onPress={handleLoadMore}>
            <View style={styles.loadMoreButton}>
              <Text style={styles.loadMoreButtonText}>Load More</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  loadMoreButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3498db', // You can customize the button style
    marginVertical: 10,
  },
  loadMoreButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
