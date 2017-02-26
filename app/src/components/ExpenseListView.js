/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View, Text, ScrollView, TouchableHighlight, ListView} from 'react-native';

export default class ExpenseListView extends Component {
  
    constructor(props) {
       super(props);       
       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       var data = [
           {title: "Lunch with team", time: "12:00 noon", amount: "10.50"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"},
           {title: "Taxt Fair", time: "10:30 am", amount: "21.00"}
       ]

       this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }

    testing() {
        
    }

    componentWillMount() {
        console.log("Expense List View will mount...")
    }

    componentDidMount() {
        
    }

    handleAppStateChange() {

    }

    renderRow(rowData, sectionID, rowID) {
        var data = rowData
        return(
            <ExpenseView title={data.title} time={data.time} amount={data.amount}/>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

class ExpenseView extends Component {
  
    constructor() {
       super();
    }

    didTapExpense() {
        
    }

    render() {
        return (
            <TouchableHighlight style={styles.expenseView} onPress={this.didTapExpense}>
                <View style={styles.container}>
                    <View style={styles.left}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.time}>{this.props.time}</Text>                    
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.amount}>S${this.props.amount}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    expenseView: {
    },
    container: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: "#ffffff",
        borderBottomColor: '#D6D6D6',
        borderBottomWidth: 1
    },    
    left: {
        flex: 6
    },
    right: {
        flex: 2
    },
    title : {
        marginLeft: 18,
        fontSize: 18
    },
    time: {
        marginLeft: 18,
        fontSize: 12,
        color: "#BBBBBB"
    },
    amount: {
        fontSize: 20,
        color: "#FF0606"
    }
});

AppRegistry.registerComponent('ExpenseListView', () => ExpenseListView);
