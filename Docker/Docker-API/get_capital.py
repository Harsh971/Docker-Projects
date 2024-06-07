# get_capital.py
import requests

def get_capital(country_name):
    url = f"https://restcountries.com/v3.1/name/{country_name}"
    response = requests.get(url)
    data = response.json()
    if data:
        return data[0]['capital']
    else:
        return "Capital information not found."

if __name__ == "__main__":
    country_name = input("Enter the name of the country: ")
    capital = get_capital(country_name)
    print(f"The capital of {country_name} is {capital}")