// Add event listeners to Calculate buttons
document.getElementById('calculateCPCBtn').addEventListener('click', calculateBreakEvenCPC);
document.getElementById('calculateProfitBtn').addEventListener('click', calculateProfitPerConversion);
document.getElementById('calculateImpressionsBtn').addEventListener('click', calculateConversionRate);


// Function to calculate Break-even CPC
function calculateBreakEvenCPC() {
    const convRate = document.getElementById('convRate').value;
    const profitPerConv = document.getElementById('profitPerConv').value;
  
    if (convRate && profitPerConv) {
      const convRateValue = parseFloat(convRate) / 100;
      const profitPerConvValue = parseFloat(profitPerConv);
  
      if (!isNaN(convRateValue) && !isNaN(profitPerConvValue) && convRateValue > 0) {
        const breakEvenCPC = convRateValue * profitPerConvValue;
        document.getElementById('breakEvenCPC').value = `$${breakEvenCPC.toFixed(2)}`;
        document.getElementById('cpcResultText').textContent = `Your Break-even CPC is $${breakEvenCPC.toFixed(2)}`;
      }
    }
  }
  
  // Function to calculate Profit Per Conversion
  function calculateProfitPerConversion() {
    const breakEvenCPC = document.getElementById('breakEvenCPCProfit').value;
    const convRate = document.getElementById('convRateProfit').value;
  
    if (breakEvenCPC && convRate) {
      const breakEvenCPCValue = parseFloat(breakEvenCPC);
      const convRateValue = parseFloat(convRate) / 100;
  
      if (!isNaN(breakEvenCPCValue) && !isNaN(convRateValue) && convRateValue > 0) {
        const profitPerConv = breakEvenCPCValue / convRateValue;
        document.getElementById('profitPerConvResult').value = `$${profitPerConv.toFixed(2)}`;
        document.getElementById('profitResultText').textContent = `Your Profit Per Conversion is $${profitPerConv.toFixed(2)}`;
      }
    }
  }
  
  // Function to calculate Conversion Rate
  function calculateConversionRate() {
    const breakEvenCPC = document.getElementById('breakEvenCPCConv').value;
    const profitPerConv = document.getElementById('profitPerConvConv').value;
  
    if (breakEvenCPC && profitPerConv) {
      const breakEvenCPCValue = parseFloat(breakEvenCPC);
      const profitPerConvValue = parseFloat(profitPerConv);
  
      if (!isNaN(breakEvenCPCValue) && !isNaN(profitPerConvValue) && profitPerConvValue > 0) {
        const convRate = (breakEvenCPCValue / profitPerConvValue) * 100;
        document.getElementById('convRateResult').value = `${convRate.toFixed(2)}%`;
        document.getElementById('convRateResultText').textContent = `Your Conversion Rate is ${convRate.toFixed(2)}%`;
      }
    }
  }
  
  // Reset functions
  function resetBreakEvenCPC() {
    document.getElementById('convRate').value = '';
    document.getElementById('profitPerConv').value = '';
    document.getElementById('breakEvenCPC').value = '';
    document.getElementById('cpcResultText').textContent = 'Your Break-even CPC is …';
  }
  
  function resetProfitPerConversion() {
    document.getElementById('breakEvenCPCProfit').value = '';
    document.getElementById('convRateProfit').value = '';
    document.getElementById('profitPerConvResult').value = '';
    document.getElementById('profitResultText').textContent = 'Your Profit Per Conversion is …';
  }
  
  function resetConversionRate() {
    document.getElementById('breakEvenCPCConv').value = '';
    document.getElementById('profitPerConvConv').value = '';
    document.getElementById('convRateResult').value = '';
    document.getElementById('convRateResultText').textContent = 'Your Conversion Rate is …';
  }

  // Function to reset all calculators
function resetAllCalculators() {
    resetBreakEvenCPC();
    resetProfitPerConversion();
    resetConversionRate();
  }
  
  // Add event listener for the Reset All button
  document.getElementById('resetAllBtn').addEventListener('click', resetAllCalculators);
  
  
  // Add event listeners
  document.getElementById('convRate').addEventListener('input', calculateBreakEvenCPC);
  document.getElementById('profitPerConv').addEventListener('input', calculateBreakEvenCPC);
  document.getElementById('resetCPCBtn').addEventListener('click', resetBreakEvenCPC);
  
  document.getElementById('breakEvenCPCProfit').addEventListener('input', calculateProfitPerConversion);
  document.getElementById('convRateProfit').addEventListener('input', calculateProfitPerConversion);
  document.getElementById('resetProfitBtn').addEventListener('click', resetProfitPerConversion);
  
  document.getElementById('breakEvenCPCConv').addEventListener('input', calculateConversionRate);
  document.getElementById('profitPerConvConv').addEventListener('input', calculateConversionRate);
  document.getElementById('resetConvRateBtn').addEventListener('click', resetConversionRate);
  
