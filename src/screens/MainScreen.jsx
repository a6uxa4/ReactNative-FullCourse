import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import AddToDo from '../components/AddToDo'
import Todo from '../components/Todo'

export default function MainScreen({
	addTodo,
	todos,
	deleteHandler,
	openTodo,
}) {
	return (
		<View>
			<AddToDo onSubmit={addTodo} />
			<FlatList
				keyExtractor={(item) => item.id.toString()}
				data={todos}
				renderItem={({ item }) => (
					<Todo
						deleteHandler={deleteHandler}
						todo={item}
						onOpen={openTodo}
					/>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({})
