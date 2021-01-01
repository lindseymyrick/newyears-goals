import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './Components/GoalItem/GoalItem';
import GoalInput from './Components/GoalInput/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false);


  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goal}])
    setIsAddMode(false);
  }

  const deleteGoal = (goalToDelete) => {
    const filteredGoals = courseGoals.filter((goal) => goal.id !== goalToDelete.id)
    setCourseGoals(filteredGoals);
    console.log('coursegoals', courseGoals)
    
  }

  const cancelGoal = () => {
    setIsAddMode(false);
  }


  return (

    <View style={styles.screen} >

      <Button title={"Add New Goal"} onPress={()=> setIsAddMode(true)} />
      <GoalInput addGoalHandler={addGoalHandler} cancelGoal={cancelGoal} visible={isAddMode}  />
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={courseGoals}
      renderItem={itemData => <GoalItem goal={itemData.item} onDelete={deleteGoal} />}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50, 
  },
});
