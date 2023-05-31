import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

export default function SmallWritingDoc({ wordList }) {
  Font.register({
    family: "TeachingPrintLined",
    src: "/fonts/TeachingPrintLined.woff",
  });
  const styles = StyleSheet.create({
    page: {
      flexWrap: "wrap",
      flexDirection: "row",
    },
    box: {
      flexDirection: "row",
      border: "1px solid black",
      color: "black",
      padding: "2mm",
      height: "29.7mm",
      margin: "0 auto",
      width: "100%",
      gap: "2mm",
    },
    image: {
      objectFit: "contain",
      width: "20%",
    },
    vocabulary: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "3mm",
    },
    text: {
      fontSize: "28px",
      fontFamily: "TeachingPrintLined",
    },
    lines: {
      height: "70%",
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
                <View style={styles.vocabulary}>
                  <Text style={styles.text}>{single.word}</Text>
                  <Image
                    src="/images/text-lines-large.jpg"
                    style={styles.lines}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
}
