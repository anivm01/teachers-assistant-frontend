import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

export default function GameCardsDoc({ wordList }) {
  Font.register({
    family: "TeachingPrint",
    src: "/fonts/TeachingPrintRegular.woff",
  });
  const styles = StyleSheet.create({
    page: {
      flexWrap: "wrap",
      flexDirection: "row",
    },
    box: {
      border: "1px solid black",
      color: "black",
      padding: "2mm",
      height: "74.25mm",
      margin: "0 auto",
      width: "70mm",
    },
    image: {
      objectFit: "contain",
      height: "80%",
    },
    vocabulary: {
      width: "100%",
      textAlign: "center",
      margin: "8px auto 0 auto",
      fontSize: "32px",
      fontFamily: "TeachingPrint",
    },
  });

  return (
    <Document>
      <Page wrap={true} size="A4">
        <View style={styles.page}>
          {wordList.map((single, index) => {
            return (
              <View style={styles.box} key={index}>
                <Image src={single.src} style={styles.image} />
                <Text style={styles.vocabulary}>{single.word}</Text>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
}
