async function fetchUPMSPResult(rollNo) {
  const res = await fetch("https://upmsp.edu.in/ResultIntermediate.aspx", {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      "accept-language": "en-GB,en;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      pragma: "no-cache",
      "sec-ch-ua": '"Brave";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Linux"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "sec-gpc": "1",
      "upgrade-insecure-requests": "1",
    },
    referrer: "https://upmsp.edu.in/ResultIntermediate.aspx",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: `__EVENTTARGET=&__EVENTARGUMENT=&__VIEWSTATE=MF8qdZm9J6oAAZaIAxV4H8uE2KHTt%2FzTHQgGJ1LqHjiN2b5Jp4GW9fcJoMXj3SDujH6e%2FkUHFck4f6ARGyxIgAEYALJHTUVrygvnxc0rDdOVHHib5b9L%2B3w5J2JCv%2FqNX7tfFIrBFQmJ5zMo%2FYa5cxD40xz0Ujuo4DGfj2K6acMW0ZTeydkXTA50iebCN6mOtM%2FNOhZWVKi06nNeVwqTfA%3D%3D&__VIEWSTATEGENERATOR=143CB090&__VIEWSTATEENCRYPTED=&__EVENTVALIDATION=2PYcLWqPQUSeoilTa6M5RtLQ%2BkXs9vi3%2BSmGzMl4x1mdLQ2dTK8XXa9JgEsjyUcpxwQAnq3LOo1IcKVhC0DqyAefbsih%2BVHeikNKXylyymPEVF4PsJ0aWfc6diUtgaG1s6IlZB7WBBvRqMfB9ub6t2GLqC9R%2F9KhtPSChKmC0sKGOyGX96MpnZ57dzG9nThXRPs1g9scOCaS%2BYZzzHOeBjP4s19tTCG%2FOJlaK2hXGDOHGoyH2Ax1KeK7OxqkT7kqPNA2htCl2nuBqGEa0mVvmphI1qXhfyuM4qFGTi06vTDz3abuIrPNwZIgZWozQAbXL%2BOwrYMfcTs5EUtIUxNc1Dxv0Xi2HJc4%2FIE6NP8aDQMChooznTAU3AL1IO7wgPySUp5n4%2FvF0681wCjF1%2Fxk1y9Yez%2FCsm%2F1huaB%2BGeNNFzgDtOg%2BtV8jgqbflYHNmcjGoIoTFyeB3cpBg4AEBRjJJmrHHt%2Br6%2FAj8%2BDmwCm2qBLwVSinBVbyuFetVnHX8EOMYVwpvk%2Fsc4%2F2DhSFqjjvsbTM0lQxLr8iTlfUi6aPEuEf7J00KxgHbGEeqhcgOjozdZLf2U3ZmlXYJPYTn7aSlwDtt2NvxGnk9elHzEPpsNQuZg%2BCGZogwbeEMfdTajwpYVJw1XmJ38vPzUpDu2vMvyFBvQ%2FamJwfBXuGOPOvf8kKb%2BX4TvlyXYXAPt290zf%2FMsakaSmgqNpHPSFA1jmfNcf91ktMTGabl%2FnQrB28PzlGtR488Gfb9qaLlYPpfSPtTP9tIJYX8ZJXiegVoGH9uTPaVPAjLQs4vZd5zECMgltiFFEK006MPw0h9Eb6tGTVlbHc5pzEzDYDdEC01CpTCQrQzy8X9Mig3NLAO7hwHGWqwdaaL4JxERwLqc37RJMNa5a3ERrvfzStB4FJQN4AFZKO6wWlKadHymhbGiuldVNvj4XubdgtYEF3lSRrtDJ7hJoUF9%2BHNgXjpOWiNINR6MM28k2tjXr9H1NmaF8SqAWH386peGDF6SgYH9udwhQ9SuLkGsRkyfVK2Kj%2BNO%2FfLvJOdwQUBDoK88WljrbhqKG251Pb0lAwcAqjFFXM7sVQzUQXQnG9Hz6OGQGHg4DE0fG%2Fj%2FxFFtr0PdI9Eywug%2BStp3%2FyYUqPfFc4E2RNti%2FIAbBUYcubmcN5l49rbtz8LLTHamwAzk%2FOdRflwsHVsbp8NJ2BSnnpoQAvRuZjDQY8UJDXIqcWq4TLfpgMbvGq8ozTEyaH2H3%2BiPA4p3%2FJ2t2VI7AwDlY4V9V7knnSKMI2ct2%2F%2F0GwYBGkQB8W6aVTV7gff6asBPgZNMTZnfazQEN5mAntSlq4H%2F1tDjYPZ7fznlcoItNzRortRXhzEbvtnNmT73fwgcDAsvmTquf8iYPnJXdLUr8mW8PDtWcYQkmppNjxX2PfRlidosItpCaNJOeEob%2BBGg0wldqjSFnwVSAZbVcp6kKo3ZaWc6MZou5XfKFpUNH19q1cYjgPuU4Q7xm4NmVLxDTlZj7ieqDMbGiweZ2avC2cnMF15Gozi8nWl6GAqqaXu3xKJk9YQXTqCcJVY9HWFzrPrSdX9Klhw6almAhLkS9%2BDAD5sBZz8fJuPylGDO41g1J2hzyeruay6i2kC6Peq3f%2FPXdXEyCnIsYsZjKCtjKh%2BjezDYgWQ7vWFF5Wxxj0yIDXe72I38tr5aT2Bxd4T5k5ciSnxCUV0yguJ7k8Fti54sDM3b4V6ywLQRQ4TNWuxC4on5WXNz7uYjHPLg7fAL5ALUStngBBb8Mqgam125TamelRQBLSSOzrxodyFZPT83rhGVWT47lRQ0fqBGcneIcgWAkdkvSU1iyNmTIBuISvtKPmPV1v5mc&ctl00%24cphBody%24ddl_districtCode=45&ctl00%24cphBody%24ddl_ExamYear=2025&ctl00%24cphBody%24txt_RollNumber=${rollNo}&ctl00%24cphBody%24TxtCAPTCHA=&ctl00%24cphBody%24HiddenField_CaptchaCode=&ctl00%24cphBody%24btnSubmit=View+Result`,
    method: "POST",
    mode: "cors",
    credentials: "include",
  });

  const html = await res.text();
  return html;
}
module.exports = { fetchUPMSPResult };
