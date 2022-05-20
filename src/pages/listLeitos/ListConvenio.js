import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import database from "../../config/database";

export default function ListConvenio({ navigation }) {
  const [leitos, setLeitos] = useState([]);
  const [particular, setParticular] = useState([]);
  const [sus, setSus] = useState([]);

  useEffect(() => {
    database.collection("Leito").onSnapshot((querry) => {
      const list = [];
      querry.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setLeitos(list);
    });
    setPart();
    set_Sus();
  }, []);

  function setPart() {
    const list = [];
    leitos.forEach((Leito) => {
      if (Leito.endereco[1] == "particular") {
        list.push(Leito);
      }
      setParticular(list);
    });
  }

  function set_Sus() {
    const list = [];
    leitos.forEach((Leito) => {
      if (Leito.endereco[1] == "sus") {
        list.push(Leito);
      }
      setSus(list);
    });
  }

  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ListTipo", {
              leitos: sus,
            });
          }}
        >
          <View style={[styless.container]}>
            <View style={[styless.lives]}>
              <View style={[styless.head]}>
                <FontAwesome style={styless.convenio} />
                <Text style={[styless.title]}> LEITOS SUS - {sus.length}</Text>
              </View>
              <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ListTipo", {
                leitos: particular,
              });
            }}
          >
            <View style={[styless.container]}>
              <View style={[styless.lives]}>
                <View style={[styless.head]}>
                  <FontAwesome style={styless.convenio} />
                  <Text style={[styless.title]}>
                    {" "}
                    LEITOS PARTICULAR - {particular.length}
                  </Text>
                </View>
                <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styless = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
  },
  lives: {
    flexDirection: "column",
    backgroundColor: "#dcdcdc",
    width: "94%",
    height: 120,
    paddingTop: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  convenio: {
    fontSize: 26,
  },
  head: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 20,
  },
  shortdescription: {
    fontSize: 16,
    paddingTop: 15,
    alignSelf: "center",
  },
  text: {
    color: "#6495ED",
    paddingTop: 20,
    fontSize: 20,
    alignSelf: "center",
  },
});
