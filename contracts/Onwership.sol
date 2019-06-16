pragma solidity ^0.5.0;

// ----------------------------------------------------------------------------
// Ownership contract for Devery contract
//
// Deployed to Ropsten Testnet at 0x654f4a3e3B7573D6b4bB7201AB70d718961765CD
//
// Enjoy.
//
// (c) BokkyPooBah / Bok Consulting Pty Ltd for Devery 2017. The MIT Licence.
// ----------------------------------------------------------------------------


contract Ownership {
    // ------------------------------------------------------------------------
    // hashOwner stores information about property owners
    // ------------------------------------------------------------------------
    mapping (bytes32 => address) hashOwner;

    event ItemOwner(bytes32 hash, address owner);

    // Allow to transfer item ownership only for item owner
    modifier onlyItemOwner(bytes32 hash) {
        require(msg.sender == hashOwner[hash], "You have not owner of this item");
        _;
    }

    // ------------------------------------------------------------------------
    // Compute item hash from the public key
    // ------------------------------------------------------------------------
    function addressHash(address item) public pure returns (bytes32 itemHash) {
        itemHash = keccak256(abi.encode(item));
    }

    // Registered an item in onwership contract
    function registerItem(address item) public returns (bool) {
        bytes32 itemHash = this.addressHash(item);
        require(hashOwner[itemHash] == address(0), "Items is already registered");
        _transferOwnership(itemHash, msg.sender);
        return true;
    }

    // Transfer ownership to new person
    function transferOwnership(bytes32 itemHash, address newOwner) public onlyItemOwner(itemHash){
        _transferOwnership(itemHash, newOwner);
    }

    function _transferOwnership(bytes32 itemHash, address newOwner) private {
        hashOwner[itemHash] = newOwner;
        emit ItemOwner(itemHash, newOwner);
    }

    // check that an owner own this item
    function isItemOwner(address itemOwner, bytes32 itemHash) public view returns (bool) {
        return itemOwner == hashOwner[itemHash];
    }
}