/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // Your code here

  if(hours<=0 || typeof hours!="number"){
    return -1
  }

  const rounder = Math.ceil(hours)

  let fhour_price;
  let additional_price;
  let daily_max;

        if(vehicleType==="car"){
          fhour_price = 5
          additional_price = 3
          daily_max = 30
        }

         else if(vehicleType==="motorcycle"){
          fhour_price = 3
          additional_price = 2
          daily_max = 18
        }

         else if(vehicleType==="bus"){
          fhour_price = 10
          additional_price = 7
          daily_max = 60
        }
        else return -1

        let fee;
        if(rounder==1){
          fee = fhour_price
        }
        else {
          fee = fhour_price +(rounder-1) *additional_price
        }
        
        if(fee>daily_max) fee = daily_max

        return fee
}
