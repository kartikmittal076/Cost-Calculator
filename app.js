const stateTaxes = {
    "UP": 1400, // Uttar Pradesh
    "UK": 1435, // Uttarakhand
    "HR": 1000, // Haryana
    "PB": 3350, // Punjab
    "RJ": 8500, // Rajasthan
    "MP": 11000, // Madhya Pradesh
    "AP": 0,    // Andhra Pradesh
    "GJ": 0,    // Gujarat
    "MH": 0,    // Maharashtra
    "CJ": 0,    // Chhattisgarh
    "HP": 1800  // Himachal Pradesh
};

const selectedStates = [];

document.getElementById('addStateBtn').addEventListener('click', function() {
    const stateSelect = document.getElementById('stateSelect');
    const selectedState = stateSelect.value;
    const selectedText = stateSelect.options[stateSelect.selectedIndex].text;

    if (selectedState !== "NA") {
        selectedStates.push(selectedState);
        const li = document.createElement('li');
        li.textContent = selectedText;
        document.getElementById('selectedStatesList').appendChild(li);
    } else {
        alert("Please select a valid state.");
    }
});

document.getElementById('calculateBtn').addEventListener('click', function() {
    const totalKms = parseFloat(document.getElementById('totalKms').value);
    const oilCostPerLiter = parseFloat(document.getElementById('oilCostPerLiter').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
    const tolls = parseFloat(document.getElementById('tolls').value);
    const permits = parseFloat(document.getElementById('permits').value);
    const numberOfDays = parseFloat(document.getElementById('numberOfDays').value);
    const staffSalary = parseFloat(document.getElementById('staffSalary').value);

    // Calculate total taxes for selected states
    let totalTaxes = 0.0;
    selectedStates.forEach(state => {
        totalTaxes += stateTaxes[state];
    });

    // Calculate oil cost
    const totalOilCost = (totalKms / fuelEfficiency) * oilCostPerLiter;

    // Calculate staff salary
    const totalStaffSalary = numberOfDays * staffSalary;

    // Calculate total cost
    const totalCost = totalOilCost + totalTaxes + tolls + permits + totalStaffSalary;

    // Output the total cost
    document.getElementById('result').textContent = `Total Cost: ${totalCost.toFixed(2)}`;
});
