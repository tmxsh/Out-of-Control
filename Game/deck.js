class Deck
{
	//create the stable cards in a deck - 2 sets of each
	createStable()
	{
		const ret = [];
		for(let i = 0; i < 2;i++)
		{
			ret[i*13+0] = Rift();
			ret[i*13+1] = ExoticMatter();
			ret[i*13+2] = Deflector();
			ret[i*13+3] = Anomaly();
			ret[i*13+4] = Wormhole();
			ret[i*13+5] = Rewind();
			ret[i*13+6] = Reactor();
			ret[i*13+7] = DarkEnergy();
			ret[i*13+8] = FutureShift();
			ret[i*13+9] = Singularity();
			ret[i*13+10] = Antimatter();
			ret[i*13+11] = TimeStrop();
			ret[i*13+12] = Nova();
		}
		
		return ret;
	}
}

const cards = {
	Rift(): 1,
	ExoticMatter(): 2,
	Deflector(): 3,
	
