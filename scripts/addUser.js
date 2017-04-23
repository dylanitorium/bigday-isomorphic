import program from 'commander';
import bcrypt from 'bcrypt-nodejs';
import series from 'node-seq-exec';

program
  .version('1.0.0')
  .option('-n, --name', 'Specify name')
  .option('-e, --email', 'Specify email')
  .option('-p, --password', 'Specify password')
  .parse(process.argv);


const {
  email,
  name,
  password,
} = program;

bcrypt.hash(password, null, null, (hashError, hash) => {
  const script = `mongo localhost:27017/bigday --eval print(db.users.save({
    name: ${name},
    email: ${email},
    password: ${hash},
  })`;

  series([script]);
});

