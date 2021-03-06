// Principal game state, all the fun begins here.
States.Play = {
	// Sets the game's basic configurations.
	init: function(){
		this.game.renderer.renderSession.roundPixels = true;
		this.physics.startSystem(Phaser.Physics.ARCADE);
	},
	// Starts the game.
	create: function(){
		// Sets the game background with file associated to 'map' on boot.js.
		this.game.background = this.game.add.sprite(0, 0, 'map');

		// Sets the world bounds.
		this.game.world.setBounds(0, 0, 1536, 1536);

		// Initialiazes the cursor keys.
		this.game.cursors = game.input.keyboard.createCursorKeys();

		// Creates and loads a Player object.
    	game.player = new Player(window.game);
		game.player.load();

		//game.enemyLeo = new EnemyLeo(window.game);
		//game.enemyLeo.load();

		// Sets the camera to follow the player.
		this.game.camera.follow(this.game.player.colliderSprite);

		//Creates HUD and its elements
		game.HUD = new HUD(window.game);
		game.HUD.load();

		//Sets HUD elements fixed to the camera
		game.HUD.healthBar.fixedToCamera = true;
		game.HUD.availableHealth.fixedToCamera = true;
		game.HUD.miniMap.fixedToCamera = true;


		//Creates Inventory Items
		game.Inventory = new Inventory(window.game);
		game.Inventory.load();

		//Sets inventory elements fixed to the camera
		game.Inventory.keyImage.fixedToCamera = true;
		game.Inventory.coinImage.fixedToCamera = true;
		game.Inventory.numberCoinsText.fixedToCamera = true;
		game.Inventory.numberKeysText.fixedToCamera = true;
		game.Inventory.inventoryImage.fixedToCamera = true;


		//Creates and loads blocks
		game.obstacle = new Obstacle(window.game);
		game.obstacle.load();

		// Creates and loads an Enemy.
		//game.enemy = new Enemy(window.game, game.player);
		//game.enemy.load();


		//game.enemy2 = new Enemy(window.game, game.player);
		//game.enemy2.load();

		//game.enemy3 = new Enemy(window.game, game.player);
		//game.enemy3.load();

		game.physics.arcade.enable(game.player);
		//game.physics.arcade.enable(game.enemy);
		//game.physics.arcade.enable(game.enemy2);
		//game.physics.arcade.enable(game.enemy3);

	},
	// Updates all the game's objects.
	update: function(){
		// Updates the player.
		game.player.update();
		game.HUD.update();
		game.Inventory.update();

		//game.enemyLeo.update();
		//game.enemy.update();
		//game.enemy2.update();
		//game.enemy3.update();

		game.physics.arcade.overlap(game.player, game.enemy, collisionEnemy, null, this);
	}

};
	function collisionEnemy (Player, Enemy) {

    Player.kill();
    Enemy.kill();


}
