const { BN, constants, expectEvent, expectRevert } = require('openzeppelin-test-helpers');
const { expect } = require('chai');
const OwnershipContract = artifacts.require("./Ownership.sol");


contract("OwnershipContract", function(accounts) {
    beforeEach(async() => {
        this.instance = await OwnershipContract.deployed();
        this.item = '0xA6aA18aE16E000787063A404a44Da3A2AC26aa1c';
        this.itemHash = await this.instance.addressHash(this.item);
    });

    it("should create an event for new item", async() => {
        const { logs }  = await this.instance.registerItem(this.item, {from: accounts[0]})
        await expectEvent.inLogs(logs, 'ItemOwner');
        
    });

    it("should create a new product", async() => {
        let owned;
        owned = await this.instance.isItemOwner(accounts[0], this.itemHash);
        expect(owned).to.be.equal(true);

        owned = await this.instance.isItemOwner(accounts[1], this.itemHash);
        expect(owned).to.be.equal(false);
    });

    it("should throw for one more registration", async() => {
        // await this.instance.registerItem(this.item, {from: accounts[0]});
        await expectRevert(this.instance.registerItem(this.item, {from: accounts[0]}),
        'Items is already registered');
        await expectRevert(this.instance.registerItem(this.item, {from: accounts[1]}),
        'Items is already registered');
    });

    it("should transfer ownership", async() => {

        await this.instance.transferOwnership(this.itemHash, accounts[1])
        let owned;
        owned = await this.instance.isItemOwner(accounts[0], this.itemHash);
        expect(owned).to.be.equal(false);

        owned = await this.instance.isItemOwner(accounts[1], this.itemHash);
        expect(owned).to.be.equal(true);
    });

});