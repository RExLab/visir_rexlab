$.getScript('http://relle.ufsc.br/exp_data/18/visir.js', function () {
    visir.Load(init);
});

$.getScript('http://relle.ufsc.br/exp_data/18/zoom.js');
$.getScript('https://raw.githubusercontent.com/twbs/bootstrap/master/js/transition.js');

$('head').append('<link rel="stylesheet" href="http://relle.ufsc.br/exp_data/18/zoom.css" type="text/css"/>');
$('head').append('<link rel="stylesheet" href="http://relle.ufsc.br/exp_data/18/instruments/breadboard/breadboard.css" type="text/css"/>');
$('head').append('<link rel="stylesheet" href="http://relle.ufsc.br/exp_data/18/instruments/flukemultimeter/flukemultimeter.css" type="text/css"/>');
$('head').append('<link rel="stylesheet" href="http://relle.ufsc.br/exp_data/18/instruments/tripledc/tripledc.css" type="text/css"/>');
$('head').append('<link rel="stylesheet" href="http://relle.ufsc.br/exp_data/18/instruments/hp_funcgen/hp_funcgen.css" type="text/css"/>');
$('head').append('<link rel="stylesheet" href="http://relle.ufsc.br/exp_data/18/instruments/ag_oscilloscope/ag_oscilloscope.css" type="text/css"/>');
$('head').append('<link rel="stylesheet" href="http://relle.ufsc.br/exp_data/18/instruments/ni_oscilloscope/ni_oscilloscope.css" type="text/css"/>');
$('head').append('<link rel="stylesheet" href="http://relle.ufsc.br/exp_data/18/instrumentframe/instrumentframe.css" type="text/css"/>');

function init() {
		function MakeMeasurement() {
			reg.MakeRequest(transport);
		}

		trace("starting up..");

		var transport = new visir.JSTransport(visir.SetWorking);
		transport.onerror = function (err) { alert("Error: " + err); }

		transport.Connect(visir.Config.Get("mesServer"), "fnord");

		var extservice = new visir.ExtServices({ MakeMeasurement: MakeMeasurement });
		var reg = new visir.InstrumentRegistry(extservice);
		var frame = new visir.InstrumentFrame(reg, transport, $("#instrumentframe"));

		var savedexperiment_1 = '<save><instruments list="breadboard/breadboard.swf|multimeter/multimeter.swf|functiongenerator/functiongenerator.swf|oscilloscope/oscilloscope.swf|tripledc/tripledc.swf" /><multimeter /><circuit><circuitlist><component>W 0 312 312 235 336 156 364</component><component>W 0 403 325 357.5 309.8 312 325</component><component>W 0 481 312 442 299 403 312</component><component>W 16711680 403 234 442 221 481 234</component><component>W 16711680 312 221 357.5 205.8 403 221</component><component>W 16711680 156 260 229.65 221 312 234</component><component>R 1k 312 273 1</component><component>R 1k 65 52 0</component><component>R 1k 65 39 0</component><component>R 1k 65 78 0</component><component>R 1k 65 65 0</component><component>R 1.6k 481 273 1</component><component>R 10k 260 78 0</component><component>R 10k 403 273 1</component><component>R 10k 260 52 0</component><component>R 10k 260 39 0</component><component>R 10k 260 65 0</component><component>R 2.7k 195 26 0</component><component>R 2.7k 195 52 0</component><component>R 2.7k 195 39 0</component><component>C 56n 312 39 0</component><component>C 56n 312 91 0</component></circuitlist></circuit></save>';
		savedexperiment_2 = '<save version="2"><instruments htmlinstruments="Breadboard|FlukeMultimeter|HPFunctionGenerator|AgilentOscilloscope|TripleDC"></instruments><circuit><circuitlist><component>W 0 312 312 235 336 156 364</component><component>W 0 403 325 357 309 312 325</component><component>W 0 481 312 442 299 403 312</component><component>W 16711680 403 234 442 221 481 234</component><component>W 16711680 312 221 357 205 403 221</component><component>W 16711680 156 260 229 221 312 234</component><component>R 1k 312 273 1</component><component>R 1k 65 52 0</component><component>R 1k 65 39 0</component><component>R 1k 65 78 0</component><component>R 1k 65 65 0</component><component>R 1.6k 481 273 1</component><component>R 10k 260 78 0</component><component>R 10k 403 273 1</component><component>R 10k 260 52 0</component><component>R 10k 260 39 0</component><component>R 10k 260 65 0</component><component>R 2.7k 195 26 0</component><component>R 2.7k 195 52 0</component><component>R 2.7k 195 39 0</component><component>C 56n 312 39 0</component><component>C 56n 559 221 0</component></circuitlist></circuit></save>';
		emptyexperiment = '<save version="2"><instruments htmlinstruments="Breadboard|FlukeMultimeter|HPFunctionGenerator|AgilentOscilloscope|TripleDC"></instruments><circuit></circuit></save>';
		reg.LoadExperiment(emptyexperiment, frame.GetInstrumentContainer());

		$(".measure").click(function () {
			MakeMeasurement();
		});

		$("#showlog").click(function () {
			$("#logwindow").css("display", "block");
		});
		$("#hidelog").click(function () {
			$("#logwindow").css("display", "none");
		});

		$("#load_experiment_1").click(function () {
			reg.LoadExperiment(savedexperiment_1, frame.GetInstrumentContainer());
		});

		$("#load_experiment_2").click(function () {
			reg.LoadExperiment(savedexperiment_2, frame.GetInstrumentContainer());
		});

        /* ---- Saved experiments edited by Lucas Mellos (RExLab - UFSC ) ----*/
        var fgen = '<save version="2"><instruments htmlinstruments="Breadboard|FlukeMultimeter|HPFunctionGenerator|AgilentOscilloscope|TripleDC"></instruments><circuit><circuitlist><component>W 16711680 637 234 373.1 196.3 156 351</component></circuitlist></circuit></save>';
        $('#load_fgen').click(function () {
            reg.LoadExperiment(fgen, frame.GetInstrumentContainer());
        });
	}



