class Deck
{
	//create the stable cards in a deck - 2 sets of each
	createStable()
	{
		const ret = [];

		for(let i = 0; i < 2;i++)
		{
			ret[0] = Rift();
		}

		return ret;
	}
}
