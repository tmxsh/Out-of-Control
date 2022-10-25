class Card
{
	constructor(rank, name, type, ability)
	{
		this.rank=rank;
		this.name;
		this.type=type;
		this.ability=ability;
	}
	
	get rank()
	{
		return this.rank;
	}
	
	get name()
	{
		return this.name;
	}
	
	get type()
	{
		return this.type;
	}
	
	get ability()
	{
		return this.ability;
	}
}

class Rift extends Card
{
	constructor()
	{
		//rCard(1, "Rift", 0, "to be implemented");
		this.rank=1;
		this.name="Rift";
		this.type=0;
		this.ability="to be implemented";
	}
}

class ExoticMatter extends Card
{
	constructor()
	{
		this.rank=2;
		this.name="Exotic Matter";
		this.type=0;
		this.ability="to be implemented";
	}
}

class Deflector extends Card
{
	constructor()
	{
		this.rank=3;
		this.name="Deflector";
		this.type=0;
		this.ability="to be implemented";
	}
}

class Anomaly extends Card
{
	constructor()
	{
		this.rank=4;
		this.name="Anomaly";
		this.type=1;
		this.ability="to be implemented";
	}
}

class Wormhole extends Card
{
	constructor()
	{
		this.rank=4;
		this.name="Wormhole";
		this.type=1;
		this.ability="to be implemented";
	}
}

class Rewind extends Card
{
	constructor()
	{
		this.rank=5;
		this.name="Rewind";
		this.type=1;
		this.ability="to be implemented";
	}
}

class Reactor extends Card
{
	constructor()
	{
		this.rank=5;
		this.name="Reactor";
		this.type=0;
		this.ability="to be implemented";
	}
}

class FutureShift extends Card
{
	constructor()
	{
		this.rank=6;
		this.name="Future Shift";
		this.type=1;
		this.ability="to be implemented";
	}
}

class Singularity extends Card
{
	constructor()
	{
		this.rank=7;
		this.name="Singularity";
		this.type=1;
		this.ability="to be implemented";
	}
}

class Antimatter extends Card
{
	constructor()
	{
		this.rank=8;
		this.name="Antimatter";
		this.type=1;
		this.ability="to be implemented";
	}
}

class TimeStop extends Card
{
	constructor()
	{
		this.rank=9;
		this.name="Time Stop";
		this.type=1;
		this.ability="to be implemented";
	}
}

class Nova extends Card
{
	constructor()
	{
		this.rank=10;
		tihs.name="Nova";
		this.type=1;
		this.ability="to be implemented";
	}
}

console.log("test");