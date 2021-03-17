import React from "react";

export const OverviewPanel = () => {
  //in production these should be passed in as props, and will likely use React.useReducer
  const [medicalSpending, setMedicalSpending] = React.useState({
    spent: 1229.0,
    deductable: 2230.0,
    deadline: "12/30/2021",
  });
  const [pharmacySpending, setPharmacySpending] = React.useState({
    spent: 82.92,
    active: 2,
  });
  const [dentalSpending, setDentalsSpending] = React.useState({
    spent: 29.21,
    limit: 123.88,
    deductable: 20,
  });

  return (
    <div className="bg-white overflow-hidden shadow">
      <div className="px-4 py-5 text-left border-b border-gray-200">
        <div className="text-lg">My Spending Overview</div>
        <div className="border-t border-black mt-8 text-sm">
          <div className="mb-4 font-bold">Medical</div>
          <div className="text-xs grid grid-cols-2">
            <div>
              <div className="text-gray-400">Total Deductable</div>
              <div>${medicalSpending.deductable}</div>
            </div>
            <div>
              <div className="text-gray-400">Deadline</div>
              <div>{medicalSpending.deadline}</div>
            </div>
          </div>
          <div className="text-xs grid grid-cols-2 mt-6">
            <div>
              <div className="text-gray-400">
                Total Spend of ${medicalSpending.deductable}
              </div>
              <div className="text-lg">${medicalSpending.spent}</div>
            </div>
            <div className="text-right">
              <div className="text-gray-400">Remaining</div>
              <div className="text-lg">
                $
                {(medicalSpending.deductable - medicalSpending.spent).toFixed(
                  2
                )}
              </div>
            </div>
            <span className="w-full bg-gray-200 h-2 col-span-2 rounded-full mt-2 relative">
              <span
                className="bg-nayya-blue absolute h-2 rounded-full"
                style={{
                  width:
                    ((medicalSpending.spent / medicalSpending.deductable) %
                      100) *
                      100 +
                    "%",
                }}
              ></span>
            </span>
          </div>
          <div className="text-xs mt-4">
            You{" "}
            <span className="font-bold">
              have{" "}
              {medicalSpending.spent >= medicalSpending.deductable ? "" : "not"}
            </span>{" "}
            reached the deductable or out-of-pocket cost.
          </div>
          <div className="text-nayya-blue mt-4 text-sm">
            <a href="#">View my medical plan</a>
          </div>
        </div>

        <div className="border-t border-black mt-4">
          <div className="mb-4 font-bold text-sm">Pharmacy</div>
          <div className="text-xs grid grid-cols-2">
            <div>
              <div className="text-gray-400">Total spent on prescriptions</div>
              <div className="text-lg">${pharmacySpending.spent}</div>
            </div>
            <div>
              <div className="text-gray-400">Total active prescriptions</div>
              <div className="text-lg">{pharmacySpending.active}</div>
            </div>
          </div>
          <div className="text-nayya-blue mt-4 text-sm">
            <a href="#">Find more affordable prescriptions</a>
          </div>
        </div>

        <div className="border-t border-black mt-4 text-sm">
          <div className="mb-4 font-bold">Dental</div>
          <div className="text-xs grid grid-cols-2">
            <div>
              <div className="text-gray-400">Annual Benifit Limit</div>
              <div>${dentalSpending.limit}</div>
            </div>
            <div>
              <div className="text-gray-400">Deductable</div>
              <div>${dentalSpending.deductable} per person</div>
            </div>
          </div>
          <div className="text-xs grid grid-cols-2 mt-6">
            <div>
              <div className="text-gray-400">
                Total Spend of ${dentalSpending.limit}
              </div>
              <div className="text-lg">${dentalSpending.spent}</div>
            </div>
            <div className="text-right">
              <div className="text-gray-400">Remaining</div>
              <div className="text-lg">
                ${(dentalSpending.limit - dentalSpending.spent).toFixed(2)}
              </div>
            </div>
            <span className="w-full bg-gray-200 h-2 col-span-2 rounded-full mt-2 relative">
              <span
                className="bg-nayya-blue absolute h-2 rounded-full"
                style={{
                  width:
                    ((dentalSpending.spent / dentalSpending.limit) % 100) *
                      100 +
                    "%",
                }}
              ></span>
            </span>
          </div>
          <div className="text-xs mt-4">
            You{" "}
            <span className="font-bold">
              have {dentalSpending.spent >= dentalSpending.limit ? "" : "not"}
            </span>{" "}
            reached the max benefit.
          </div>
        </div>
        <div className="text-nayya-blue mt-6 text-sm border-t border-gray-300 pt-4">
          <a href="#">View my cards and plans</a>
        </div>
      </div>
    </div>
  );
};
