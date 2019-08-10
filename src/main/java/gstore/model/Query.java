package gstore.model;

import java.io.Serializable;

public class Query implements Serializable {

    private static final long serialVersionUID = 3843558621545635010L;

    private String databaseName;
    private String queryText;
    private String resultFormat;
    private String querySelect;

    public Query() {
    }

    public String getDatabaseName() {
        return databaseName;
    }

    public void setDatabaseName(String databaseName) {
        this.databaseName = databaseName;
    }

    public String getQueryText() {
        return queryText;
    }

    public void setQueryText(String queryText) {
        this.queryText = queryText;
    }

    public String getResultFormat() {
        return resultFormat;
    }

    public void setResultFormat(String resultFormat) {
        this.resultFormat = resultFormat;
    }


    public String getQuerySelect() {
        return querySelect;
    }

    public void setQuerySelect(String querySelect) {
        this.querySelect = querySelect;
    }
}
