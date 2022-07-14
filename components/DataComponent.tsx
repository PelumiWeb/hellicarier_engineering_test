import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
const DataComponent = (props: any) => {

  const filteredData = React.useMemo(() => {
    if (props.searchInput && props.searchInput.length > 0) { 
      return !!props.data && props.data.filter((data: any) => {
      // console.log(data.post.title == props.filterBy)
        return (data.name.toLowerCase().includes(props.searchInput.toLowerCase()) || 
        data.body.toLowerCase().includes(props.searchInput.toLowerCase())
        )
      })
    } else if (props.filterBy && props.filterBy.length > 0) {
      return !!props.data && props.data.filter((data: any) => {        
        return data.post.title === props.filterBy

      })
    }
    else {
      return !!props.data && props?.data
    }
  }, [props.searchInput, props.data, props.filterBy])

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
                    name:{item.name}
                  </Text>
                  <Text>
                    body:{item?.body?.length > 20 ? item.body.slice(0, 20) : item.body}
                  </Text>
                </View>
            </TouchableOpacity>
        )
    }
  return (
    <View>
      <Text style={{textAlign: "center", fontWeight:"bold", marginBottom: 10, marginTop:10}}>{props.date}</Text>
      {!props.isLoading && filteredData?.length == 0 && <Text style={{alignItems: "center"}}>No results found</Text>}
      {props.isLoading && <Text style={{textAlign: "center"}}>Loading...</Text>}
      {!!filteredData && filteredData.map((data:any) => (
        <RenderComponent v
        key={data.id}
        item={data}/>
      ))}
    </View>
  )
}

export default DataComponent

const styles = StyleSheet.create({})