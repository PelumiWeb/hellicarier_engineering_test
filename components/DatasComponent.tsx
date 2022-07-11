import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'native-base'

const DatasComponent = (props: any) => {
    const renderComponent =({item}: any) => {
        return(
            <View style={{
                display: "flex",
                flexDirection: "row",
                
            }}>
                <Text>Items</Text>
            </View>
        )
    }
  return (
    <View>
      <Text>{props.date}</Text>
      <FlatList 
      data={props.data}
      renderItem={renderComponent}
      
      />
    </View>
  )
}

export default DatasComponent

const styles = StyleSheet.create({})