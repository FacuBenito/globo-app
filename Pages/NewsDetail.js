import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, 
	ActivityIndicator, Image, ScrollView } from 'react-native';

const NewsDetail = ({route, navigation}) => {
	const [dataLoading, finishLoading] = useState(true);
	const [allPostData, setAllPostData] = useState([]);

	const {url} = route.params;
	const selectedPost = allPostData.find(post => post.url === url);
	const apiKey = '999b57083dde4591b22e8f5e71fc36d4'
	useEffect(() => {
		fetch(`https://newsapi.org/v2/everything?q=tech&apiKey=${apiKey}`)
		.then(resp => resp.json())
		.then(resp => setAllPostData(resp.articles))
		.catch(err => console.error(err))
		.finally(() => finishLoading(false))

	}, []);

	return(
		<View style={styles.container}>
			<TouchableOpacity 
				style={styles.button}
				onPress={() => navigation.goBack()}
			>
				<Text style={styles.buttontext}>Go back</Text>
			</TouchableOpacity>
			{
				dataLoading ? <ActivityIndicator/> : (
					<ScrollView>
						<Text style={styles.title}>{selectedPost.title}</Text>
						<Image 
							style={styles.storyimage}
							source={{uri: selectedPost.urlToImage}}
						/>
						<Text style={styles.blurb}>{selectedPost.description}</Text>
						<Text style={styles.content}>{selectedPost.content}</Text>
					</ScrollView>
				)
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center'
	},
	button: {
		padding: 20,
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	buttontext: {
		fontFamily: 'OpenSans',
		fontWeight: 'bold'
	},
	storyimage: {
		height: 300,
		width: '100%'
	},
	title: {
		fontFamily: 'OpenSans',
		fontWeight: 'bold',
		fontSize: 20,
		padding: 20
	},
	blurb: {
		fontFamily: 'OpenSans',
		fontSize: 14,
		padding: 20,
		fontStyle: 'italic'
	},
	content: {
		flex: 1,
		fontFamily: 'OpenSans',
		fontSize: 16,
		paddingTop: 30,
		paddingBottom: 100,
		paddingLeft: 20,
		paddingRight: 20
	}
});

export default NewsDetail;