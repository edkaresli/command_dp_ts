import { INITIAL_TEXT } from './constants.ts';
import Context from './context.ts';
import { DeleteCommand, ReplaceCommand, InsertTextCommand } from './command.ts';

class Client {
    private context: Context;
    deleteCommand: DeleteCommand;
    insertCommand: InsertTextCommand;
    replaceCommand: ReplaceCommand;

    constructor(text: string) {
        this.context = new Context(text);

        this.deleteCommand = new DeleteCommand(this.context);
        this.replaceCommand = new ReplaceCommand(this.context);
        this.insertCommand = new InsertTextCommand(this.context);
    }

    getText() {
        return this.context.text;        
    }
}

const main = () => {
  const client = new Client(INITIAL_TEXT);
  
  const replaceButton = (sourceWord: string, destWord: string) => {
    client.replaceCommand.execute(sourceWord, destWord);
  }

  const deleteButton = (sourceWord: string) => {
      client.deleteCommand.execute(sourceWord);
  }

  const insertButton = (sourceWord: string, pos: number) => {
      client.insertCommand.execute(sourceWord, pos);
  }

  setTimeout(() => { 
      console.log("----------Before insert: ", client.getText());
      insertButton(' MEOWWWWW!!!!! ', 21);
      console.log("----------After insert: ", client.getText());
      console.log('------------------------------------');
    }, 1000);

  setTimeout(() => { 
    console.log("----------Before replace: ", client.getText());
    replaceButton('behaviour', 'nature');  
    console.log("----------After replace: ", client.getText());
    console.log('------------------------------------');
  }, 1000);
  
  setTimeout(() => { 
    console.log("----------Before delete: ", client.getText());  
    deleteButton(' MEOWWWWW!!!!! ');  
    console.log("----------After delete: ", client.getText());
    console.log('------------------------------------');
  }, 1000);
}

main();