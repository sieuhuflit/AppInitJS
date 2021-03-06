import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { width, height } from 'react-native-dimension'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const iconUser = <FontAwesome name="user-o" size={width(20)} color={'#C3C3C3'} />

const INPUT_NAME = 'inpName'
const INPUT_AGE = 'inpAge'
const INPUT_LIENSE = 'inpLiense'
const INPUT_PHONE = 'inpPhone'
const componentName = ({ closeModal, onEdit, data, onChangeText, txtName, txtAge, txtLiense, txtPhone }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.btnClose} onPress={closeModal}>
      <Text style={styles.txtButton}>{'X'}</Text>
    </TouchableOpacity>
    <View style={styles.contInfo}>
      <View style={styles.contLeft}>

        {/* Name  */}
        <View>
          <Text style={styles.txtTitle}>{'Age driver'}</Text>
          <TextInput
            value={txtAge}
            keyboardType={'numeric'}
            maxLength={2}
            onChangeText={text => onChangeText(text, INPUT_AGE)}
            style={styles.inp} placeholder={'Age driver'}/>
        </View>

        {/* Liense */}
        <View>
          <Text style={styles.txtTitle}>{'Liense driver'}</Text>
          <TextInput
            value={txtLiense}
            maxLength={3}
            onChangeText={text => onChangeText(text, INPUT_LIENSE)}
            style={styles.inp} placeholder={'Liense driver'}/>
        </View>

        {/*  Phone number */}
        <View>
          <Text style={styles.txtTitle}>{'Cell phone driver'}</Text>
          <TextInput
            value={txtPhone}
            maxLength={12}
            onChangeText={text => onChangeText(text, INPUT_PHONE)}
            style={styles.inp} placeholder={'Cell phone driver'}/>
        </View>
      </View>
      <View style={styles.contRight}>
        <View style={styles.contImage}>
          {iconUser}
        </View>
        <TextInput
          value={txtName}
          maxLength={7}
          onChangeText={text => onChangeText(text, INPUT_NAME)}
          style={styles.inpName} placeholder={'Short Name driver'}/>
      </View>
    </View>
    <TouchableOpacity onPress={onEdit}>
      <View style={styles.contFunction}>
        <Text style={styles.txtButton}>{'Edit'}</Text>
      </View>
    </TouchableOpacity>

  </View>
)

export default componentName
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width(90),
    borderRadius: 8,
    paddingTop: height(2),
    paddingHorizontal: width(3)
  },
  contInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contImage: {
    width: width(30),
    height: width(30),
    borderWidth: 1,
    borderColor: '#C3C3C3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contLeft: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: height(2)
  },
  contRight: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  contFunction: {
    borderTopWidth: 1,
    borderColor: '#F0F0F0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height(2)
  },
  txtTitle: {
    fontSize: width(5)
  },
  txtButton: {
    fontSize: width(5),
    fontWeight: 'bold',
    color: 'blue'
  },
  inp: {
    width: width(40),
    borderWidth: 1,
    borderColor: '#F0F0F0',
    paddingVertical: height(0.5),
    borderRadius: 5,
    marginBottom: height(2)
  },
  inpName: {
    width: width(30),
    borderWidth: 1,
    borderColor: '#F0F0F0',
    paddingVertical: height(0.5),
    borderRadius: 5,
    marginTop: height(2)
  },
  btnClose: {
    alignSelf: 'flex-end'
  }
})
