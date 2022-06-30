import React from 'react'
import { View,Text } from 'react-native'
import styles from '../theme/appTheme'

const CalculadoraScreen = () => {
    // const [buttons,setButtons] = useState();
  return (
    <View>
        <Text style={styles.previousResult}>1,500.00</Text>
        <Text style={styles.results}>1,500.00</Text>
        <View >
            <View style={styles.btnFirstRow}>
            <Text style={styles.btnContent}>1</Text>
            </View>
        </View>
    </View>
  )
}

export default CalculadoraScreen