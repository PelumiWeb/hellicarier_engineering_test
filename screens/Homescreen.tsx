import { StyleSheet, Text, View , SafeAreaView} from 'react-native'
import { VStack, Heading, Input, Icon,} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import FilterByComponent from '../components/FilterByComponent';
import DatasComponent from '../components/DatasComponent';
const Homescreen = () => {
  return (
    <SafeAreaView>

      <Text>Homescreen</Text>
      <VStack w="100%" space={5} alignSelf="center" px="5">
        <Heading fontSize="lg">Search</Heading>
        <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" borderWidth="0" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
      </VStack>
    {/* Search */}
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} > 
      <FilterByComponent text="Name" />
      <FilterByComponent text="Title" />
      <FilterByComponent text="Status" />
      <FilterByComponent text="Type" />
    </View>

    {/* Data */}
    <View> 
      <DatasComponent date={new Date().getFullYear()}  data={[1, 2, 3 ,4 ,5 ,]}/>

    </View>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({})