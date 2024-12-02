class NetworkHost {
    constructor(host, address, mask) {
        this.host = host;      // Name of the host
        this.address = address; // IP address
        this.mask = mask;       // Subnet mask
    }

    // Method to validate IP address format
    isValidIPAddress() {
        const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
        return ipv4Regex.test(this.address);
    }

    // Method to validate subnet mask format
    isValidSubnetMask() {
        const maskParts = this.mask.split('.');
        return maskParts.length === 4 && 
               maskParts.every(part => {
                   const num = parseInt(part);
                   return num >= 0 && num <= 255;
               });
    }

    // Method to get network information
    getNetworkInfo() {
        if (!this.isValidIPAddress() || !this.isValidSubnetMask()) {
            throw new Error('Invalid IP address or subnet mask');
        }

        return {
            host: this.host,
            address: this.address,
            mask: this.mask
        };
    }
}

// Example usage
const pc1 = new NetworkHost('PC1', '192.168.0.1', '255.255.255.0');
const server1 = new NetworkHost('Server1', '172.16.0.1', '255.255.0.0');
const server2 = new NetworkHost('Server2', '10.0.0.1', '255.0.0.0');

try {
    console.log(pc1.getNetworkInfo());
    console.log(server1.getNetworkInfo());
    console.log(server2.getNetworkInfo());
} catch (error) {
    console.error(error.message);
}
