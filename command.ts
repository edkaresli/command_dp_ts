import Context from './context.ts';

abstract class Command {
  constructor(public ctx: Context) {      
      this.ctx = ctx;
  }
  abstract execute(...args: any[]): void;
}

export class InsertTextCommand extends Command {
    constructor(public ctx: Context) {
        super(ctx);
    }
    
    execute(phrase: string, position: number) {
        const text = this.ctx.text;
        const part1 = text.substr(0, position);
        const part2 = text.substr(position);
        this.ctx.text = `${part1}${phrase}${part2}`;
    }    
}

export class DeleteCommand extends Command {
    constructor(public ctx: Context) {
        super(ctx);
    }

    execute(word: string) {
        const text = this.ctx.text;        
        this.ctx.text = text.replace(word, '');
    }
}

export class ReplaceCommand extends Command {
    constructor(public ctx: Context) {
        super(ctx);
    }

    execute(sourceWord: string, destWord: string) {
        const text = this.ctx.text;        
        this.ctx.text = text.replace(destWord, sourceWord);
    }
}