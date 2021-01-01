import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const GoalItem = props => {
    return( 
    <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.goal)}>
        <View style={styles.listItem}> 
        <Text> {props.goal.value} </Text> 
        </View>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
    }
  });

export default GoalItem;