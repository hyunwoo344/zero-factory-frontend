'use client'

import { useState } from 'react'

// 아이콘 컴포넌트들
function MajesticonsCupLine() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[21.05%_17.54%_20.61%_15.79%]">
        <div className="absolute inset-[-7.14%_-6.25%]">
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
            <path d="M3 2h18l-1 18H4L3 2zM5 4l.5 16h13L19 4H5z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

function MdiRecycle() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[12.75%_7.67%_4.17%_7.96%]">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  )
}

function JamBottle() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[8.33%_29.17%]">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C10.5 2 9.5 3 9.5 4.5V6H8.5C7.5 6 6.5 7 6.5 8V20C6.5 21.5 7.5 22.5 9 22.5H15C16.5 22.5 17.5 21.5 17.5 20V8C17.5 7 16.5 6 15.5 6H14.5V4.5C14.5 3 13.5 2 12 2Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  )
}

function EvaNavigationOutline() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute bottom-1/4 left-[16.67%] right-[20.85%] top-[12.5%]">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  )
}

function MiFilter() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[12.49%_16.67%]">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
          <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  )
}

function IcBaselinePlace() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[8.33%_20.83%]">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  )
}

function MaterialSymbolsLists() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[16.67%_8.33%]">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
          <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  )
}

export default function Home() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="bg-white min-h-screen flex flex-col pb-16">
      {/* Top Bar */}
      <div className="bg-white shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] w-full">
        <div className="h-6 bg-white w-full relative">
          <div className="absolute h-[10.227px] right-[8.72px] top-1/2 -translate-y-1/2 w-[33.64px]">
            <span className="text-xs font-medium">9:41</span>
          </div>
          <div className="absolute h-[14px] right-[51px] top-1/2 -translate-y-1/2 w-[9px]">
            <div className="w-full h-full bg-black rounded-sm"></div>
          </div>
          <div className="absolute right-[69px] w-[14px] h-[14px] top-1/2 -translate-y-1/2">
            <div className="w-full h-full bg-black rounded-sm"></div>
          </div>
          <div className="absolute h-[14px] right-[84.98px] top-1/2 -translate-y-1/2 w-[18.045px]">
            <div className="w-full h-full bg-black rounded-sm"></div>
          </div>
        </div>
        <div className="h-12 flex items-center justify-center relative">
          <p className="text-black text-xl font-medium">Home</p>
          <p className="absolute left-[68.5px] text-[rgba(0,0,0,0.43)] text-xl font-medium">My Bottle</p>
          <p className="absolute left-[296.5px] text-[rgba(0,0,0,0.43)] text-xl font-medium">My Info</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="flex flex-col gap-1 items-start justify-center px-3 py-0 w-full">
        <p className="font-medium text-sm text-black w-full">Search by store or region name</p>
        <div className="flex gap-1 items-center px-3 py-2 rounded-md w-full border border-[rgba(0,0,0,0.1)]">
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 text-sm text-[rgba(0,0,0,0.5)] outline-none"
          />
        </div>
      </div>

      {/* Map Container */}
      <div className="flex h-[452px] items-start overflow-hidden px-3 py-0 w-full">
        <div className="flex-1 bg-[rgba(0,0,0,0.05)] h-full overflow-hidden relative rounded-md">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-[336px] h-[336px]">
            {/* Map Background */}
            <div className="absolute inset-0 bg-gray-100 rounded-lg"></div>
            
            {/* Map Markers */}
            <div className="absolute top-[26.19%] left-[10.12%] w-[26.286px] h-[26.286px] bg-[rgba(112,112,112,0.8)] rounded-[13.143px] flex items-center justify-center">
              <div className="w-[19px] h-[19px] text-white">
                <MajesticonsCupLine />
              </div>
            </div>
            
            <div className="absolute top-[74.41%] left-[29.76%] w-[26.286px] h-[26.286px] bg-[rgba(112,112,112,0.8)] rounded-[13.143px] flex items-center justify-center">
              <div className="w-[21.143px] h-[21.143px] text-white">
                <MdiRecycle />
              </div>
            </div>
            
            <div className="absolute top-[67.56%] left-[0.59%] w-[26.286px] h-[26.286px] bg-[rgba(112,112,112,0.8)] rounded-[13.143px] flex items-center justify-center">
              <div className="w-[19.714px] h-[19.714px] text-white">
                <JamBottle />
              </div>
            </div>
            
            <div className="absolute top-[42px] left-[168px] w-[26.286px] h-[26.286px] bg-[rgba(112,112,112,0.8)] rounded-[13.143px] flex items-center justify-center">
              <div className="w-[19.714px] h-[19.714px] text-white">
                <JamBottle />
              </div>
            </div>
            
            <div className="absolute top-[245px] left-[283px] w-[32.571px] h-[32.571px] bg-[rgba(112,112,112,0.8)] rounded-[16.286px] flex items-center justify-center border-2 border-black">
              <span className="text-[24.783px] font-medium text-black">-</span>
            </div>
            
            <div className="absolute top-[284px] left-[283px] w-[32.571px] h-[32.571px] bg-[rgba(112,112,112,0.8)] rounded-[16.286px] flex items-center justify-center border-2 border-black">
              <div className="w-[24px] h-[24px] text-black">
                <EvaNavigationOutline />
              </div>
            </div>
            
            <div className="absolute top-[206px] left-[283px] w-[32.571px] h-[32.571px] bg-[rgba(112,112,112,0.8)] rounded-[16.286px] flex items-center justify-center border-2 border-black">
              <span className="text-[24.783px] font-medium text-black">+</span>
            </div>
            
            {/* Filter and Add Places Buttons */}
            <div className="absolute top-[10px] left-[-4px] w-[77px] h-[27.271px] bg-[rgba(101,101,101,0.7)] rounded-[6.417px] flex items-center px-2">
              <div className="w-[16.042px] h-[16.042px] text-black mr-1">
                <MiFilter />
              </div>
              <span className="text-[12.069px] font-medium text-black">filter</span>
            </div>
            
            <div className="absolute top-[10px] left-[64px] w-[116px] h-[27px] bg-[rgba(101,101,101,0.7)] rounded-[6.417px] flex items-center px-2">
              <div className="w-[16px] h-[16px] text-black mr-1">
                <IcBaselinePlace />
              </div>
              <span className="text-[12.069px] font-medium text-black">Add Places</span>
            </div>
          </div>
          
          <div className="absolute left-4 right-4 text-center text-[rgba(0,0,0,0.5)] text-base font-medium" style={{ top: 'calc(50% + 8px)' }}>
            <p className="mb-0">Kakao Map interface</p>
            <p>with location markers</p>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6" style={{ top: 'calc(50% - 12px)' }}>
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex flex-col gap-2 items-center justify-center px-3 py-0 w-full">
        <div className="flex gap-2 items-start w-full">
          <div className="flex-1 rounded-md border border-[rgba(0,0,0,0.1)]">
            <div className="flex gap-2 items-center justify-center p-3">
              <div className="bg-[rgba(0,0,0,0.05)] rounded-2xl w-8 h-8 flex items-center justify-center">
                <span className="text-xl">♻️</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-black">다회용컵 카페</p>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-md border border-[rgba(0,0,0,0.1)]">
            <div className="flex gap-2 items-center justify-center p-3">
              <div className="bg-[rgba(0,0,0,0.05)] rounded-2xl w-8 h-8 flex items-center justify-center">
                <span className="text-xl">🗑️</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-black">다회용컵 반납함</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-start w-full">
          <div className="flex-1 rounded-md border border-[rgba(0,0,0,0.1)]">
            <div className="flex gap-2 items-center justify-center p-3">
              <div className="bg-[rgba(0,0,0,0.05)] rounded-2xl w-8 h-8 flex items-center justify-center">
                <span className="text-xl">🏪</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-black">텀블러 포인트 적립</p>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-md border border-[rgba(0,0,0,0.1)]">
            <div className="flex gap-2 items-center justify-center p-3">
              <div className="bg-[rgba(0,0,0,0.05)] rounded-2xl w-8 h-8 flex items-center justify-center">
                <span className="text-xl">🧼</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-black">텀블러 세척기</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Zero Waste List */}
      <div className="flex flex-col items-center justify-center px-3 py-0 w-full">
        <div className="flex gap-3 items-center pb-0 pt-4 px-0 w-full">
          <div className="flex-1">
            <p className="text-lg font-medium text-black">근처 제로웨이스트</p>
          </div>
        </div>
        
        {/* List Items */}
        <div className="flex gap-2 items-center justify-center px-0 py-3 w-full border-b border-gray-200">
          <div className="bg-[rgba(0,0,0,0.05)] rounded-2xl w-8 h-8 flex items-center justify-center">
            <span className="text-xl">♻️</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-black">Eco-friendly Store</p>
            <p className="text-xs text-[rgba(0,0,0,0.5)]">5 km away</p>
          </div>
          <p className="text-sm font-medium text-black">Open Now</p>
        </div>
        
        <div className="flex gap-2 items-center justify-center px-0 py-3 w-full border-b border-gray-200">
          <div className="bg-[rgba(0,0,0,0.05)] rounded-2xl w-8 h-8 flex items-center justify-center">
            <span className="text-xl">🗑️</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-black">RVM Station</p>
            <p className="text-xs text-[rgba(0,0,0,0.5)]">3 km away</p>
          </div>
          <p className="text-sm font-medium text-black">Open Now</p>
        </div>
        
        <div className="flex gap-2 items-center justify-center px-0 py-3 w-full border-b border-gray-200">
          <div className="bg-[rgba(0,0,0,0.05)] rounded-2xl w-8 h-8 flex items-center justify-center">
            <span className="text-xl">🏪</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-black">Local Refill Shop</p>
            <p className="text-xs text-[rgba(0,0,0,0.5)]">1.5 km away</p>
          </div>
          <p className="text-sm font-medium text-black">Open Now</p>
        </div>
      </div>

      {/* Bottom Navigation - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] z-50">
        <div className="flex">
          <div className="flex-1 flex flex-col items-center p-1">
            <div className="w-7 h-7 flex items-center justify-center">
              <MaterialSymbolsLists />
            </div>
            <div className="text-[10px] text-black text-center">Search</div>
          </div>
          <div className="flex-1 flex flex-col items-center p-1">
            <div className="w-7 h-7 flex items-center justify-center">
              <span className="text-xl">🏠</span>
            </div>
            <div className="text-[10px] text-black text-center">Home</div>
          </div>
          <div className="flex-1 flex flex-col items-center p-1">
            <div className="w-7 h-7 flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
            <div className="text-[10px] text-black text-center">Profile</div>
          </div>
        </div>
      </div>
    </div>
  )
}
