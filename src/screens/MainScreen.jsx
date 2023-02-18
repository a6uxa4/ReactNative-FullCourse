import React from 'react'
import { StyleSheet, View, FlatList, Image } from 'react-native'
import AddToDo from '../components/AddToDo'
import Todo from '../components/Todo'

export default function MainScreen({
	addTodo,
	todos,
	deleteHandler,
	openTodo,
}) {
	let content = (
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
	)

	if (todos.length === 0) {
		content = (
			<View style={styles.imgWrap}>
				<Image
					style={styles.image}
					source={require('../../assets/notFound.png')}
				/>
			</View>
		)
	}
	return (
		<View>
			<AddToDo onSubmit={addTodo} />
			{content}
		</View>
	)
}

const styles = StyleSheet.create({
	imgWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		height: 300,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
})
