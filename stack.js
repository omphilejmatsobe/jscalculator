class Stack
{
    constructor()
    {
        this.items = [];
    }

    push(elem)
    {
        if(!elem) return 0;
        
        this.items.push(elem);
    }

    pop()
    {
        if (this.items.length == 0)
            return 'Underflow'
        return this.items.pop();
    }

    top()
    {
        return this.items[this.items.length - 1];
    }

    show()
    {
        return this.items;
    }

    getStack()
    {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}