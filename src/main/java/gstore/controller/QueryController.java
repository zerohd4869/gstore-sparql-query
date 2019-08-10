package gstore.controller;

import gstore.model.Query;
import jgsc.GstoreConnector;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class QueryController {

    @GetMapping("/")
    public String greetingForm(Model model) {
        Query query = new Query();
        query.setDatabaseName("music");
        model.addAttribute("query", query);
        return "query";
    }

    @PostMapping("/query")
    public String greetingSubmit(@ModelAttribute Query query, Model model) {
        String dbName = query.getDatabaseName();
        String sparql = query.getQueryText();
        String resultFormat = query.getResultFormat();
        String format = "json";

        switch (resultFormat) {
            case "1":
                format = "html";
                break;
            case "2":
                format = "json";
                break;
            case "3":
                format = "csv";
                break;
            case "4":
                format = "txt";
                break;
        }

        GstoreConnector gc = new GstoreConnector("127.0.0.1", 9000, "root", "123456");

        gc.load(dbName);
        String res = gc.query(dbName, format, sparql);
        gc.unload(dbName);
        model.addAttribute("res", res);
        model.addAttribute("format", format);

        if ("html".equals(format)) {
            model.addAttribute("dbName", query.getDatabaseName());
            return "result";
        } else {
            model.addAttribute("query", query);
            return "query";
        }

    }

}
