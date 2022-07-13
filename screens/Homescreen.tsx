import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import { VStack, Heading, Input, Icon,} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import FilterByComponent from '../components/FilterByComponent';
import DatasComponent from '../components/DataComponent';
import {  useGetPosts } from '../useGetPost';
import { useQuery } from 'react-query';
import { GraphQLClient, gql } from "graphql-request";
const URL = "https://graphqlzero.almansi.me/api"

const graphQLClient = new GraphQLClient(URL);
const Homescreen = () => {

  const {isLoading, data} = useQuery("get-data", async () => {
    const data = await graphQLClient.request(
      gql`
    query {
      comments(options: {paginate: {page: 1, limit: 25}}){
      data {
        id
        name
        email
        body
        post {
          title
        }
      }
      }
      }
    `)
    return data
  })
  console.log(data)
  const [searchInput, setSearchInput] = React.useState("") 
  const [filterBy, setFilterBy] = React.useState("")
 
  const filteredData = React.useMemo(() => {
    if (searchInput && searchInput.length > 0 || filterBy && filterBy.length > 0) { 
      return !!data.comments.data && data.comments.data.filter((data: any) => {
        return (data.name.toLowerCase().includes(searchInput.toLowerCase() ||  filterBy.toLowerCase()) || 
        data.body.toLowerCase().includes(searchInput.toLowerCase() ||  filterBy.toLowerCase())
        )
      })
    }else {
      return !!data?.comments.data && data?.comments.data
    }
  }, [searchInput, data, filterBy])

  console.log(filteredData)
    

  return (
    <SafeAreaView>

      <Text>Homescreen</Text>
      <VStack w="100%" space={5} alignSelf="center" px="5">
        <Heading fontSize="lg">Search</Heading>
        <Input placeholder="Search" 
        value={searchInput}
        onChangeText={(text) => setSearchInput(text)}
      variant="filled" width="100%" borderRadius="10" py="1" px="2" borderWidth="0" InputRightElement={<Icon mr="2" size="5" color="gray.400" as={
      <Ionicons name="ios-search" />
      } />} />
      </VStack>
    {/* Search */}
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} > 
    <Text>Recents Search</Text>
      <FilterByComponent text="Name" />
      <FilterByComponent text="Title" />
      <FilterByComponent text="Status" />
      <FilterByComponent text="Type" />
    </View>

    {/* Data */}
    <ScrollView> 
      {/* <DatasComponent date={"Monday"}  
      isLoading={isLoading}
      data={data?.comments?.data && data?.comments?.data?.slice(0, 5)}
       searchInput={searchInput}/>
       <DatasComponent
      isLoading={isLoading}
       date={"Tuesday"}  
      data={data?.comments?.data  && data?.comments?.data.slice(5, 9)}
       searchInput={searchInput}/>
       <DatasComponent
      isLoading={isLoading}
       date={"Wednesday"}  
       filterBy={filterBy}
      data={data?.comments?.data  && data?.comments?.data.slice(9, 14)}
       searchInput={searchInput}/>
       <DatasComponent 
       isLoading={isLoading}
       date={"Thursday"}  
      data={data?.comments?.data  && data?.comments?.data.slice(14, 19)}
       searchInput={searchInput}/>
       <DatasComponent 
       isLoading={isLoading}
       date={"Friday"}  
      data={data?.comments?.data  && data?.comments?.data.slice(19, 24)}
       searchInput={searchInput}/> */}
       <DatasComponent 
       isLoading={isLoading}
       date={"Friday"}  
      data={filteredData}
       /> 

    </ScrollView>
    </SafeAreaView> 
  )
}

export default Homescreen

const styles = StyleSheet.create({})