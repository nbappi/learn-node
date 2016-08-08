var processArgs = process.argv; var sum = 0;

for( var i= 2, len = processArgs.length ; i < len ; i++) {
    sum +=Number(processArgs[i]);
}

console.log(sum);