import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const reviewsData = [
    { id: 1, user: 'John Doe', review: 'Great Burger! Very delicious.', rating: 5 },
    { id: 2, user: 'Jane Smith', review: 'Could be better.', rating: 3 },
    { id: 3, user: 'Alice Johnson', review: 'I love it!', rating: 4 },
    // Add more reviews as needed
];

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.reviewContainer}>
            <Text style={styles.userName}>{review.user}</Text>
            <Text style={styles.review}>{review.review}</Text>
            <Text style={styles.rating}>Rating: {review.rating}/5</Text>
        </View>
    );
};

const CardReviews = () => {
    return (
        <>
            <Text style={styles.about}>About</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <FlatList
                data={reviewsData}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    reviewContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    review: {
        fontSize: 14,
        marginTop: 5,
    },
    rating: {
        fontSize: 12,
        marginTop: 5,
        color: 'gray',
    },
    about: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})

export default CardReviews;