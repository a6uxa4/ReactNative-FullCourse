import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import AppCard from '../components/UI/AppCard'

export default function TodoScreen({ goBack, todo, deleteHandler }) {
	return (
		<View>
			<AppCard style={styles.card}>
				<Text style={styles.title}>{todo.title}</Text>
				<Button title='Редактировать' />
			</AppCard>
			<View style={styles.buttons}>
				<View style={styles.button}>
					<Button title='Назад' onPress={goBack} color='#757575' />
				</View>
				<View style={styles.button}>
					<Button
						title='Удалить'
						color='#e53935'
						onPress={() => deleteHandler(todo.id)}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	card: {
		marginBottom: 20,
		padding: 15,
	},
	button: {
		width: '40%',
	},
	title: {
		fontSize: 20,
	},
})
