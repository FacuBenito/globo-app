import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,
	 ActivityIndicator, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

const Homepage = ({navigation}) => {

	const [dataLoading, finishLoading] = useState(true);
	const [newsData, setData] = useState([]);
	const apiKey = '999b57083dde4591b22e8f5e71fc36d4'

	useEffect(() => {
		fetch(`https://newsapi.org/v2/everything?q=tech&apiKey=${apiKey}`)
		.then(resp => resp.json())
		.then(resp => setData(resp.articles))
		.catch(err => console.error(err))
		.finally(() => finishLoading(false))
	},[])

	const storyItem = ({item}) => {
		return(
			<TouchableWithoutFeedback
				onPress={() => navigation.navigate('NewsDetail', {url: item.url})}
			>
				<View style={styles.listings}>
					<Text style={styles.title}>{item.title}</Text>
					<Image 
						style={styles.thumbnail}
						source={{uri: item.urlToImage}}
					/>
					<Text style={styles.blurb}>{item.description}</Text>
				</View>	
			</TouchableWithoutFeedback>
		)
	}

	return(
		<View style={styles.container}>
			{dataLoading ? <ActivityIndicator /> : (
				<FlatList
					data={newsData}
					renderItem={storyItem}
					keyExtractor={(item) => item.url}
				/>
			)}
		</View>
	)

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		padding: 20
	},
	thumbnail: {
		height: 100,
		width: '98%',
	},
	listings: {
		paddingTop: 15,
		paddingBottom: 25,
		borderBottomWidth: 1
	},
	title: {
		paddingBottom: 10,
		fontFamily: 'OpenSans',
		fontWeight: 'bold'
	},
	blurb: {
		fontFamily: 'OpenSans',
		fontStyle: 'italic'
	}
})

export default Homepage;