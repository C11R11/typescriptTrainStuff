const { spawn, exec } = require('child_process');
//const ls = spawn('top', ['-b', '-n', '10', '-d', '1']);

/* async function x()
{
  return new Promise<void>(async function (resolve) {

    const ls = spawn('external/exe_node-linux');
 
    ls.stdout.on('data', (data: any) => {
      console.log(`stdout: ${data}`);
    });
    
    ls.stderr.on('data', (data: any) => {
      console.log(`stderr: ${data}`);
    });

    ls.on('exit', (code: any) => {
      console.log(`Exit code is: ${code}`);
      resolve()
    });
  })
} 

async() => await x();*/

function execPromise(command: any) {
  return new Promise(function(resolve, reject) {
      exec(command, (error: any, stdout: string, stderr: any) => {
          if (error) {
              reject(error);
              return;
          }

          console.log("awefefe")

          resolve(stdout.trim());
      });
  });
}


execPromise('external/exe_node-linux').then(function(result) {
  console.log(result);
}).catch(function(e) {
  console.error(e.message);
});


/* try {
  var result = async() => await execPromise('external/exe_node-linux');
} catch (e:any) {
  console.error(e.message);
} */