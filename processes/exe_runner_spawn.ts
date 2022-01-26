import { spawn, exec } from 'child_process';

/* async function x()
{
  return new Promise<void>(async function (resolve) {

	let command

	if (process.platform === 'win32') {
		command = "assets\\exe_creation-win.exe"
	} else {
		command = "assets/exe_creation-linux"
	}

	const ls = spawn(command);
 
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

async() => await x(); */

let command

if (process.platform === 'win32') {
	command = "assets\\exe_creation-win.exe"
} else {
	command = "assets/exe_creation-linux"
}

const ls = spawn(command);

ls.stdout.on('data', (data: any) => {
	console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data: any) => {
	console.log(`stderr: ${data}`);
});

ls.on('exit', (code: any) => {
	console.log(`Exit code is: ${code}`);
});