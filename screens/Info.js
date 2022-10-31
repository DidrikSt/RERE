import React from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import { useRoute } from "@react-navigation/native";

function Info() {
  return (
    <ScrollView style={styles.container}>
        <View style={[styles.card, styles.elevation]}>
      <Text style={styles.heading}>
        Varför behövs elektronik återvinnas?
        </Text>
      <Text style={styles.text}>I nästan alla elektronik så finns det så
kallade konflikt resurser vilket är
råvaror som utvinns ur
konfliktområden och där försäljningen
finansierar fortsatta strider och
korruption. Genom att då
återanvända och återvinna överbliven
elektronik så kan utvinningen av
resurserna i Kongo subtraheras.
Av all elektronik (t.ex. kylskåp, mikros,
TV:ar och dylikt) så återvinns 59% av
alla elektronikavfall. Dock när vi
kommer till telefoner i Sverige så
återvinns endast 10% av dem vilket är
nästan 1/6 av hur bra vi återvinner
annan elektronik.
</Text>
</View>
<View style={[styles.card, styles.shadowProp]}>
<Text style={styles.heading}>
Konfliktmineraler
</Text>
<Text>
Konfliktmineraler, vilket beskriv som
mineralerna guld, tantal, tenn och
volfram är per definition inte en
konfliktmineral. Konfliktmineral
definieras som ovan nämnda
mineraler utbrutna från
konfliktdrabbade områden. Dessa
områden är Centralafrikanska
republiken, Myanmar, Afghanistan och
Demokratiska republiken Kongo och i
dessa områden kan med se ett
samband mellan utbrytning av
mineraler och ett upptrappat våld.

</Text>
      </View>
      <View style={[styles.card, styles.shadowProp]}>
<Text style={styles.heading}>
Dagens läge
</Text>
<Text style={styles.text}>
I dagens läge så är Sverige
tillsammans med Norge och
Storbritannien ledande i Europa med
återvinning men det finns fortfarande
en lång väg att gå för att uppnå ett
hållbart samhälle
</Text>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '95%',
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  container: {
    // position: "absolute",
    backgroundColor: "#84daa9",
    flex: 1,
    
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
});

export { Info };
