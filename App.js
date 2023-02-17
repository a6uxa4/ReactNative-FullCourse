import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Navbar from './src/components/Navbar'
import MainScreen from './src/screens/MainScreen'
import TodoScreen from './src/screens/TodoScreen'

export default function App() {
	const [todos, setTodos] = useState([
		{ id: '1', title: 'save' },
		{ id: '2', title: 'work' },
	])
	const [todoId, setTodoId] = useState(null)

	function addTodo(title) {
		setTodos((prev) => [
			...prev,
			{
				id: Date.now().toString(),
				title,
			},
		])
	}

	function deleteHandler(id) {
		const todo = todos.find((t) => t.id === id)
		Alert.alert(
			'Удаление элемента',
			`Вы Уверены, что хотите удалить ${todo.title}`,
			[
				{ text: 'Отмена', style: 'cancel' },
				{
					text: 'Удалить',
					style: 'destructive',
					onPress: () => {
						setTodoId(null)
						setTodos(todos.filter((item) => item.id !== id))
					},
				},
			],
			{ cancelable: false },
		)
	}

	let content = (
		<MainScreen
			deleteHandler={deleteHandler}
			addTodo={addTodo}
			todos={todos}
			openTodo={setTodoId}
		/>
	)

	if (todoId) {
		const selectedTodo = todos.find((todo) => todo.id === todoId)
		content = (
			<TodoScreen
				deleteHandler={deleteHandler}
				todo={selectedTodo}
				goBack={() => setTodoId(null)}
			/>
		)
	}

	return (
		<View>
			<Navbar />
			<View style={styles.container}>{content}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
})