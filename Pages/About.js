import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import imageA from '../assets/home-image-2.jpg';
import imageB from '../assets/our-story-image-2.jpg';
import imageC from '../assets/our-story-image-3.jpg';

const blockA = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada, lacus sed cursus convallis, elit augue porttitor velit, vel pharetra risus nunc id arcu. Curabitur feugiat scelerisque rhoncus. Etiam sit amet sagittis augue. Ut nisi leo, varius varius sapien at, molestie interdum magna. Maecenas feugiat, nisi id mattis rutrum, ipsum eros venenatis nisl, nec congue magna nisl vitae ligula. Nam nec odio metus. Ut maximus viverra lacus, et vulputate magna fermentum vitae. Sed vestibulum pulvinar lacus vitae bibendum. Quisque ac laoreet ipsum, non dapibus lacus.';
const blockB = 'Etiam metus leo, ornare ut mollis ornare, pharetra nec dolor. Pellentesque dignissim, nulla pretium facilisis fermentum, eros diam porttitor nisl, at aliquam ipsum odio rhoncus nisi. Phasellus porttitor, urna eu placerat sollicitudin, sapien urna luctus arcu, eget vulputate libero felis a tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pellentesque egestas metus ut dictum.'

const AboutGlobo = () => {
	return(
		<View style={styles.container}>
			<ScrollView>
				<Image source={imageA} style={{width: '100%', height: 300}}/>
				<Text style={styles.heading}>We Are Different</Text>
				<Text style={styles.text}>{blockA}</Text>
				<Image source={imageB} style={{width: '100%', height: 300}}/>
				<Text style={styles.heading}>Leaders in our field</Text>
				<Text style={styles.text}>{blockB}</Text>
				<Image source={imageC} style={{width: '100%', height: 400}}/>
				<Text style={styles.heading}>We are the Experts</Text>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	heading: {
		fontFamily: 'OpenSans',
		fontWeight: 'bold',
		paddingTop: 5
	},
	text: {
		fontFamily: 'OpenSans'
	}
})

export default AboutGlobo;
