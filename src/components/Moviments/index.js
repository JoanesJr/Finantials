import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { MotiView, AnimatePresence, MotiText } from 'moti';

export default function Moviments( {data}) {
    const [showValue, setShowValue] = useState(false);
 return (
     <TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue)}>
        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
             {showValue ?
             <AnimatePresence>
                     <MotiText 
                     style={data.type === 0 ? styles.expenses : styles.value}
                     from={{
                        translateX: 100,
                     }}

                     animate={{
                        translateX: 0
                     }}
                     
                     transition={{
                        type: 'timing',
                        duration: 500
                     }}
                     >{data.type === 0 ? `- ${data.value}` : data.value}</MotiText>
            </AnimatePresence>
            :
                 <AnimatePresence>
                <MotiView 
                style={styles.skeleton}
                from={{
                    opacity: 0
                }}

                animate={{
                    opacity: 1
                }}

                transition={{
                    type: 'timing'
                }}
                >
                    
                </MotiView>
            </AnimatePresence>
            }
        </View>
     </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
        paddingEnd: 14,
        paddingStart: 14
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSzie: 16
    },
    value: {
        fontSize: 16,
        color: '#2dcc71',
        fontWeight: 'bold'
    },
    expenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
});