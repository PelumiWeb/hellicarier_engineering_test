import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
const DataComponent = (props: any) => {

    const RenderComponent = ({item}: any) => {
        return(
            <TouchableOpacity style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                marginVertical: 10
            }}>
                <Text style={{width: "10%"}}>{item.id}</Text>
                <View style={{
                width: "80%",
              display: "flex",
              justifyContent: "space-between",
              // alignItems: "space-between", 
              
              }}>
                  <Text style={{marginBottom: 10}}>
                    {item.name}
                  </Text>
                  <Text>
                    {item?.body?.length > 20 ? item.body.slice(0, 20) : item.body}
                  </Text>
                </View>
            </TouchableOpacity>
        )
    }
  return (
    <View>
      <Text style={{textAlign: "center", fontWeight:"bold", marginBottom: 10, marginTop:10}}>{props.date}</Text>
      {!props.isLoading && props?.data?.length == 0 && <Text style={{alignItems: "center"}}>No results found</Text>}
      {props.isLoading && <Text>Loading...</Text>}
      {!!props.data && props?.data?.map((data:any) => (
        <RenderComponent item={data}/>
      ))}
    </View>
  )
}

export default DataComponent

const styles = StyleSheet.create({})