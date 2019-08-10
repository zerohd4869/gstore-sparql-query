function buildMapTable(res, flag) {
    console.log('www')
    if (res && 'success' === res.StatusMsg) {
        var table_tip = '<p>Total answers: ' + res.AnsNum + '. Query time: ' + res.QueryTime + '. &nbsp;&nbsp;<a href="#" id="html_download" style="color:blue">Click to Download</a></p>';
        if (!flag) {
            if (res.AnsNum >= 100) {
                table_tip += '<p>Number of answers is too large, show only ' + Math.min(res.results.bindings.length, 100) + ' of them!</p>';
            }
        }
        var yhtml = table_tip + "<table border='1' style='font-size:medium'>";
        yhtml += '<thead><tr align="center"><th>id</th><th>x_type</th><th>\? x</th><th>y_type</th><th>\? y</th></tr></thead>';
        $.each(res.results.bindings, function (index, item) {
            if (index < 100 || (index >= 100 && flag)) {
                yhtml += '<tr><td>' + index + '</td><td>' + item.x.type + '</td><td>' + item.x.value + '</td><td>' + item.y.type + '</td><td>' + item.y.value + '</td></tr>';
            }
        });
        yhtml += '</table>';
        $("#main_body").html(yhtml);
    }

}

function fileDowload(res, format) {
    var Link = document.createElement('a');
    Link.download = $('#element_1').val() + "." + format;
    Link.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([res]);
    Link.href = URL.createObjectURL(blob);
    document.body.appendChild(Link);
    Link.click();
    document.body.removeChild(Link);

}

function getResults(res, format) {
    if (res) {
        if ('html' === format) {
            buildMapTable(JSON.parse(res), false);
        } else {
            fileDowload(res, format);
        }
    }
}
