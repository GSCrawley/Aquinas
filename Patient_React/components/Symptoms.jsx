import React from 'react';
import { useState, useEffect } from 'react';
import {View, TextInput, Text, TouchableOpacity, ScrollView, StyleSheet, Keyboard} from 'react-native';
import axios from 'axios';
import { ContainerStyles, TextStyles, ButtonStyles, Colors } from './Styles.jsx';

var symptomsLst = [];
function SymptomFormScreen({route, navigation}) {
  const [symptoms, setSymptoms] = useState([]);
  const [message, setMessage] = useState([]);
  const { token } = route.params;
  var { url } = route.params;
  const [dUrl, setURL] = useState([]);
  connectionAttempts = 0
  
  const emptyList = () => {
    symptomsLst = []
  }

  // Function to fetch the URL asynchronously
  useEffect(() => {
    const fetchURL = async () => {
      try {
        const response = await fetch('http://localhost:6000/disease_server'); // Replace with your actual API URL
        const data = await response.json();
        setURL(data.url); // Once the data is fetched, update the 'url' state with the received URL
      console.log(data.url)
      } catch (error) {
        console.error('Error fetching URL:', error);
      }
    };
    fetchURL();
  }, []);

  const handleSymptomFormSend = async () => {
    const symptomsData = symptomsLst;
    try{
        const response = await axios.post(`${url}/symptoms`, {symptomsData},
        {headers: {Authorization: `Bearer ${token}`}
        });
        setMessage(response.data);
        // console.log(response.data);
        navigation.navigate('Diagnosis', {message: response.data, url: dUrl, token});
        emptyList()
    } catch (error) {
        if (error.request && connectionAttempts <= 5) {
          // Network error (request was made but no response received)
          const fetchData = async () => {
            const result = await axios.get('http://localhost:6000/symptoms_server');
            url = result.data.url;
            connectionAttempts = connectionAttempts + 1
            handleSymptomFormSend()
          };
          fetchData();
          // console.error('Network error:', error.request);
          // Alert.alert('Error', 'Network error. Please check your connection.');
        } else {
          // Other errors
          console.error('Error:', error.message);
          Alert.alert('Error', 'An unexpected error occurred.');
        }
      }
  };

  const SymptomInputField = (props) => {
    const [symptom, setSymptom] = useState();

    const handleAddSymptom = (value) => {
      props.addSymptom(value)
      symptomsLst.push(value)
      console.log(symptomsLst)
      setSymptom(null);
    }
//   const symptomFunctionCombine = () => {
//     handleSymptomFormSend();
//     // emptyList();
//     navigation.navigate('Diagnosis', {message: message});
//   }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flax-start', right: "5%" }}>
        <TextInput style={styles.input} value={symptom} onChangeText={text => setSymptom(text)} placeholder='Write a symptom'/>
        <TouchableOpacity style={styles.button} onPress={() => handleAddSymptom(symptom)}>
          <View>
              <Text style={styles.buttonText}>Add Symptom/Sign</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSymptomFormSend}>
          <View>
              <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const SymptomItem = (props) => {
    return(
      <View style={{marginTop: 10}}>
          <View>
              <Text>{props.index}</Text>
          </View>
          <View>
              <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>{props.symptom}</Text>
              <TouchableOpacity onPress={() => props.deleteSymptom()}>
                <Text>Delete</Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }

  const addSymptom = (symptom) => {
    if (symptom == null) return;
    setSymptoms([...symptoms, symptom]);
    Keyboard.dismiss();
  }

  const deleteSymptom = (deleteIndex) => {
    setSymptoms(symptoms.filter((value, index) => index != deleteIndex));
  }

  return (
    <ScrollView style={{left: "5%"}}>
        <View>
          {
            symptoms.map((symptom, index) => {
              return (
                <View key={index} style={{backgroundColor:"white", borderWidth:"1", borderColor: "#ccc", padding: 10, borderRadius: 15, width: "90%"}}>
                  <SymptomItem index={index + 1} symptom={symptom} deleteSymptom={() => deleteSymptom(index)}/>
                </View>
              );
            })
          }
        </View>
        <SymptomInputField addSymptom={addSymptom}/>
    </ScrollView>
  );
}

export default SymptomFormScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#cbdcec',
      alignItems: 'center',
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 30,
    },
    subtitle:{
        fontWeight: 'bold',
    },
  
    body: {
        backgroundColor: 'white',
        width:'90%',
        margin:20,
        marginBottom:50,
        borderRadius:10
  
    },
    bot: {
        fontSize:16,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '90%',
        height:60,
        marginBottom:10,
        borderRadius:10,
        backgroundColor:"white"
    },
    button:{
        backgroundColor:'#4d87bf',
        width: '90%',
        height:60,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    },
  });