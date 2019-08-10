function handleQueryExample() {
    var example = document.getElementById("element_2").value;
    if (example === "q1") {
        document.getElementById("element_3").value = "select ?x ?y\n" +
            "where\n" +
            "{ \n" +
            "\t?x <http://www.unisound.com/knowledge_graph/vocab/song_name> ?y.\n" +
            "}\n";
    }

    if (example === "q2") {
        document.getElementById("element_3").value = "select ?x ?y\n" +
            "where\n" +
            "{ \n" +
            "\t?s <http://www.w3.org/2000/01/rdf-schema#label> \"album #3956\".\n" +
            "\t?s ?x ?y.\n" +
            "} \n";
    }
    if (example === "q3") {
        document.getElementById("element_3").value = "select ?x ?y \n" +
            "where\n" +
            "{ \n" +
            "\t?x <http://www.unisound.com/knowledge_graph/vocab/album_song_song_id> ?z.\n" +
            "\t?z <http://www.unisound.com/knowledge_graph/vocab/song_play_count> ?w.\n" +
            "\t?z <http://www.unisound.com/knowledge_graph/vocab/song_lyric> ?y.\n" +
            "} \n";
    }
}