const { exec, spawn } = require("child_process");

(function execute() {
  var child = spawn('npm run build && cp -r build_include/* build && rm -r scars-sc && rm -rf scars-sc && cp -r build scars-sc && zip -vr scars-sc.zip scars-sc/', {
    shell: true
  });
  child.stderr.on('data', function (data) {
    console.error("STDERR:", data.toString());
    if (data.toString().includes("scars-sc: No such file or directory")) {
      exec('mkdir scars-sc');
      execute();
    }
  });
  child.stdout.on('data', function (data) {
    console.log("STDOUT:", data.toString());
  });
  child.on('exit', function (exitCode) {
    console.log("Child exited with code: " + exitCode);
  });
})();