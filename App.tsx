import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import Homescreen from './screens/Homescreen';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NativeBaseProvider, extendTheme } from "native-base";
import { QueryClient, QueryClientProvider } from "react-query";


// const client = new ApolloClient({
//     uri: 'https://api.mocki.io/v2/c4d7a195/graphql',
//     cache: new InMemoryCache()
//   });
  const queryClient = new QueryClient();

export default function App() {
const theme = extendTheme({colors: {}});

  return (
    <NativeBaseProvider theme={theme}> 

    <QueryClientProvider client={queryClient}> 
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Homescreen />
    </SafeAreaView>
    </QueryClientProvider>
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
